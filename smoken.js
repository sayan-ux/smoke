let par;
let para;
let particles = [];


wind = 0;
let time = 0;

function setup() {
    createCanvas(600, 600);
    frameRate(25);
}

function change() {
    wind = noise(2 * time) * 0.04 - 0.020;
    time += 0.01;
}
function draw() {
    change();

    background(0);
    
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    par = new particle();
    para = new particle();
    particles.push(par);
    particles.push(para);
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].show();
        particles[i].update();
        
            if(particles[i].y <470)
            {
            let bx=350-particles[i].x+5;
            let by=300-particles[i].y;
            particles[i].x+=bx/30;
            }
            if (particles[i].finished()) {
                particles.splice(i, 1);
            

            
        }
    }
}



class particle {
    constructor() {
        this.x = random(320, 380);
        this.y = 500;
        this.w = random(5, 6);
        this.h = random(5, 6);
        this.alpha = random(170, 255);
        this.red = 10;
        this.vx = random(-.5, .5);
        this.vy = random(-2, -1);
    }

    finished() {
        return this.red < -60;

    }



    update() {
        this.vx += wind;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 3;
        if (mouseIsPressed && mouseButton === LEFT) {
            let mx = pmouseX - mouseX;
            let my = pmouseY - mouseY;
            this.x -= mx / 10;
            this.y -= my / 12;
        }
        if (this.alpha < 200) {
            this.x -= 0.5;
            this.y -= 1;
        }




    }
    show() {
        noStroke();
        let c = color(200, this.alpha, this.red);
        let value = lightness(c);
        fill(c);
        this.red--;
        rect(this.x, this.y, this.w, this.h);
        ellipse(this.x + 3, this.y + 3, this.w, this.h);
        ellipse(this.x + 4, this.y + 4, this.w, this.h);
        ellipse(this.x + 5, this.y + 5, this.w, this.h);
    }
}

