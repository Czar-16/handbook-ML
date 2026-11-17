import {test,expect} from '@playwright/test';

test('temporary pen draws, follows scroll, changes ink, undoes and clears',async({page})=>{
  const errors:string[]=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/handbook/start-here/');
  await page.locator('#annotation-tools').getByRole('button',{name:'Pen · Off'}).click();
  await page.getByRole('button',{name:'Pen off',exact:true}).click();
  // Close the settings so they cannot obscure the reading surface.
  await page.locator('#pen-panel-toggle').click();
  const target=page.locator('#main h1');
  async function draw(){
    await target.scrollIntoViewIfNeeded();
    const box=(await target.boundingBox())!;
    await page.mouse.move(box.x+10,box.y+12);
    await page.mouse.down();
    await page.mouse.move(box.x+130,box.y+28,{steps:12});
    await page.mouse.up();
  }
  const paths=page.locator('#annotation-ink path');
  await draw();
  await expect(paths).toHaveCount(1);
  await expect(paths.first()).toHaveAttribute('stroke','#dc2626');
  const transform=await paths.first().getAttribute('transform');
  await page.evaluate(()=>window.scrollBy(0,120));
  await expect(paths.first()).not.toHaveAttribute('transform',transform!);
  await page.locator('#pen-panel-toggle').click();
  await page.getByRole('button',{name:'Blue',exact:true}).click();
  await page.getByLabel('Thickness').fill('8');
  await page.getByLabel('Opacity').fill('40');
  await page.locator('#pen-panel-toggle').click();
  await draw();
  await expect(paths).toHaveCount(2);
  await expect(paths.last()).toHaveAttribute('stroke','#2563eb');
  await expect(paths.last()).toHaveAttribute('stroke-width','8');
  await expect(paths.last()).toHaveAttribute('stroke-opacity','0.4');
  await page.locator('#pen-panel-toggle').click();
  await page.getByRole('button',{name:'Undo',exact:true}).click();
  await expect(paths).toHaveCount(1);
  page.once('dialog',d=>d.dismiss());
  await page.getByRole('button',{name:'Clear all'}).click();
  await expect(paths).toHaveCount(1);
  page.once('dialog',d=>d.accept());
  await page.getByRole('button',{name:'Clear all'}).click();
  await expect(paths).toHaveCount(0);
  await expect(page.getByRole('button',{name:'Undo',exact:true})).toBeDisabled();
  await page.keyboard.press('Escape');
  await expect(page.locator('body')).not.toHaveClass(/pen-drawing/);
  await page.reload();
  await expect(paths).toHaveCount(0);
  await expect(page.locator('#pen-panel-toggle')).toContainText('Off');
  expect(errors).toEqual([]);
});

test('pen panel fits narrow screens and pauses for mobile navigation',async({page},info)=>{
  await page.goto('/');
  await page.locator('#pen-panel-toggle').click();
  await page.getByRole('button',{name:'Pen off',exact:true}).click();
  await expect(page.locator('body')).toHaveClass(/pen-drawing/);
  if(info.project.name==='mobile'){
    await page.getByRole('button',{name:'Open navigation'}).click();
    await expect(page.locator('body')).not.toHaveClass(/pen-drawing/);
    await expect(page.locator('#annotation-tools')).not.toBeVisible();
    await page.keyboard.press('Escape');
  }
  for(const width of [320,375,780,1440]){
    await page.setViewportSize({width,height:812});
    const box=(await page.locator('#annotation-tools').boundingBox())!;
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x+box.width).toBeLessThanOrEqual(width+1);
  }
  await page.emulateMedia({media:'print'});
  await expect(page.locator('#annotation-tools')).not.toBeVisible();
});

test('touch draws without scrolling and leaving warns before discarding ink',async({page,context})=>{
  await page.goto('/handbook/start-here/');
  await page.locator('#pen-panel-toggle').click();
  await page.getByRole('button',{name:'Pen off',exact:true}).click();
  await page.locator('#pen-panel-toggle').click();
  const target=page.locator('#main h1');
  await target.scrollIntoViewIfNeeded();
  const box=(await target.boundingBox())!;
  const y=await page.evaluate(()=>scrollY);
  const cdp=await context.newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:box.x+20,y:box.y+20}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:box.x+100,y:box.y+35}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await expect(page.locator('#annotation-ink path')).toHaveCount(1);
  expect(await page.evaluate(()=>scrollY)).toBe(y);
  const warning=page.waitForEvent('dialog');
  const reload=page.reload({waitUntil:'domcontentloaded',timeout:10000});
  const dialog=await warning;
  expect(dialog.type()).toBe('beforeunload');
  await dialog.accept();
  await reload;
  await expect(page.locator('#annotation-ink path')).toHaveCount(0);
  await expect(page.locator('body')).not.toHaveClass(/pen-drawing/);
});
