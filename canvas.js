function intitializeAnimation() {
  window.requestAnimation(draw);
}

function drawArt(ctx) {
  ctx.save();
  let time2 = new Date();
  ctx.transalte(time2.getSeconds(), 0);

  // Draw base
  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.lineTo(-190, -190);
  ctx.moveTo(-240, -120)
  ctx.lineTo(-240, -190);
  ctx.stroke();

  // Draw top
  ctx.beginPath();
  ctx.arc(-190, -120, 30, -30, Math.PI + 2, false);
  ctx.stroke();

  ctx.save();
  let time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.beginPath();
  ctx.moveTo(-190, -120);
  ctx.lineTo(-170, -120);
  ctx.lineTo(-170, -150);
  ctx.lineTo(-190, -150);
  ctx.stroke();
  ctx.restore();

  ctx.fillRect(-160, 10, 100, 100);
  ctx.restore();
}

function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 900, 700); // clears canvas

  // Define pen
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 1)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();

  windox.requestAnimationFrame(draw);
}

intitializeAnimation();
