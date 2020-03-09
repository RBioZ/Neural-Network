class Matrix{
  constructor(rows, cols){
     this.rows = rows;
     this.cols = cols;

     this.data = [];
    
     for(let i=0; i<rows;i++){
       let arr = [];
       for(let j=0; j<cols;j++){
         arr.push(Math.floor(Math.random()*10))
      }
      this.data.push(arr)
    }
  }

  map(func){
    this.data = this.data.map((arr,i) =>{
      return arr.map((num,j) => {
        return func(num,i,j);
      })
    })
    return this;
  }


  static add(A,B){
    var matrix = new Matrix(A.rows,A.cols)
    console.log(matrix.data)
    matrix.map((num,i,j) =>{
      console.log(i,j)
      return A.data[i][j] + B.data[i][j]
    });
    console.log(matrix.data)
  }
}