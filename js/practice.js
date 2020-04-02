class Circle {
    constructor( radius, area ) {
        this._radius = radius;
    }
    set radius( radius ) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set diameter( diameter ){
        this._diameter = diameter;
    }
    get diameter() {
        return this._diameter = this._radius * 2 ;
    }

    set area( area ){
        this._area = area;
    }
    get area() {
        return this._area = parseFloat (( this.radius * Math.PI ).toFixed(3)) ;
    }
    set lenght( lenght ){
        this._lenght = lenght;
    }
    get lenght() {
        return this._lenght = parseFloat (( this.diameter * Math.PI ).toFixed(3) );
    }
}

let test = new Circle(1);
console.log( test );



class Marker {
    constructor( inkColor, inkAmount) {
        this.inkColor = inkColor;
        this.inkAmount = inkAmount;
    }
        render( ut ) {
            let text = "";
            let markerText = "";
            let style = "";
            for ( let i = 0; i < ut.length; i++ ) {
                if ( this.inkAmount != 0 ) {
                    if ( ut[i] == " ") {
                        this.inkAmount += 0.5;
                    }
                    text += ut[i];
                    this.inkAmount = this.inkAmount-0.5;
                } else {
                    document.write( "<p>Marker if out of ink.</p>" );
                    break;
                }
            }
            style = ( ` style="color: ${this.inkColor}"` );
            markerText = document.write( `<p ${style}>${text}</p>` );
            return markerText;
        }

}

class MarkerRefill extends Marker {
    refill(f) {
      if (f > 100) {
        f = 100;
      } 
      else {
        this.inkAmount += f;
      }
    }
  }

let marker = new MarkerRefill("red", 1);
marker.refill(25);
marker.render("psadsdasdas dsfs s;dfsdf sdfsd fsdfasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddd");

