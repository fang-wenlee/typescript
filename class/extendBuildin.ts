class PowerArray<T> extends Array<T> {
  
  public isEmpty() {
    return this.length === 0;
  }
   public remove(item:T):Object{
      const index = this.indexOf(item);
      if (index === -1) {
        throw new Error(`${item} not in list`);
      }
      this.splice(index, 1);
      return this
    }

}
//https://www.typescriptlang.org/play?#code/MYGwhgzhAEAKD2B3ApgJwIKtWAngHgBUA+aZADwBdkA7AExk232OgG8AoaaTr6ASwgBRALYAHCjgAUASjY9e0VMgoBXVNWgUAFgIB0IGgHNt0ALznoABgDc86AF870USoBGIPsEXJh8AG7IknxUwgBcBNKhAPKuAFbIwBQcCgrA8NQQFPx05GaaOhC6fDlkUQBmQSHStim8fGXQQSVmFgC0AIyyybW82qhI0NTIiNCCWPCokgAGACSswT72g-BZxdAemVPVTryOPfl6EKIewIHFtOQANNCdNT1KquoHEDt73FxvPAZZYFjteUMRggUBgsLg8NQVMJXGgiJJ2tcAEzXACs2y4aQy8AM+nghkkv1QnXkmIg2OQuPx0EJ7V0Sl8AUkiNk6OgpPJlIJfyKQjEEhk1WgAHohdAymAQBBkDwgA
//there is no error when run on TypeScript  site
let arr1 = new PowerArray<number>(1, 2, 5, 10, 23);
console.log(arr1)
 console.log( arr1.remove(2) );
console.log(arr1.isEmpty()); // false 