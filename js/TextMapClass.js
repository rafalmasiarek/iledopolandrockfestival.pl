"use strict";

class TextMap {
    constructor(cellSize, cellBorderWidth, renderWidth, renderHeight) {
        let canvasElement = $('<canvas>');
        canvasElement.css({ 'width': renderWidth, 'height': renderHeight, 'display': 'block', 'visibility': 'hidden', 'position': 'absolute' });
        canvasElement.appendTo('body');
        this.element = canvasElement[0];

        this.ctx = this.element.getContext('2d');
        
        this.cellSize = cellSize || 10;
        this.cellBorderWidth = (cellBorderWidth === 0) ? 0 : (cellBorderWidth || 2);
    
        this.fontFamily = 'Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuan Yi Micro Hei", sans-serif';
        this.fontBold = true;

        // const
        this.cellDistance = this.cellSize + this.cellBorderWidth;

        this.updateMetrics();
    }

    updateMetrics() {
        this.element.width = this.element.clientWidth;
        this.element.height = this.element.clientHeight;

        this.maxHeight = this.element.clientHeight - (this.element.clientHeight*0);
    }

    clearScene() {
        this.ctx.clearRect( 0, 0, this.ctx.canvas.width, this.ctx.canvas.height );
    }

    drawFrame() {
        this.updateMetrics();
        this.clearScene();
        
        this.drawContent(this);
    }

    setFont(fontFamily, fontBold) {
        this.fontFamily = fontFamily;
        this.fontBold = fontBold;
    }



    getMap(text) {
        this.updateMetrics();
        this.clearScene();

        let width = this.ctx.canvas.width;
        let height = this.ctx.canvas.height;

        // draw text
        let textWeight = (this.fontBold) ? 'bold' : 'normal';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = `${textWeight} 500px ${this.fontFamily}`;
        
        const scale = width / this.ctx.measureText(text).width;
        const fontSize = Math.min(this.maxHeight, 500 * scale * 0.8);

        this.ctx.font = `${textWeight} ${fontSize}px ${this.fontFamily}`;

        this.ctx.fillText(text, width / 2, height / 2);



        let pixels = this.ctx.getImageData(0, 0, width, height).data;
        // console.log(pixels);

        const matrix = [];
        for (let y = Math.floor(this.cellDistance/2); y < height; y += this.cellDistance) {
            for (let x = Math.floor(this.cellDistance/2); x < width; x += this.cellDistance) {
                const alpha = pixels[(x + y * width) * 4 + 3];

                if (alpha > 0) {
                    matrix.push({
                        x: Math.floor(x / this.cellDistance),
                        y: Math.floor(y / this.cellDistance),
                    });
                }
            }
        }



        return matrix;
    }

    run(drawContent) {
        
        this.drawContent = drawContent || (() => {});

        this.frames = 0;
        this.running = true;

        this.countFrames();
        setTimeout(() => {
            this.drawFrame();
        });
    }

    stop() {
        this.running = false;
    }
}