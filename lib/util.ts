class Util {
   public time: string;
   public genString(length: number): string {
      let result = '';
      const chars =
         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const len = chars.length;
      for (let i = 0; i < length; i++) {
         result += chars.charAt(
            Math.floor(Math.random() * len)
         );
      }
      return result;
   }
   public getDate() {
      //need to add countdown date, and return proper time!
      const date = new Date();
      const time =
         date.getHours() +
         ':' +
         date.getMinutes() +
         ':' +
         date.getSeconds();
      const today = new Date(
         `${this.getMonth(
            date.getMonth() + 1
         )} ${date.getDate()}, ${date.getFullYear()} ${time}`
      ).getTime();
      const interval = setInterval(() => {
         const distanceBetween =
            today - new Date().getTime();
         const d = Math.floor(
            distanceBetween / (1000 * 60 * 60 * 24)
         );
         const h = Math.floor(
            (distanceBetween % (1000 * 60 * 60 * 24)) /
               (1000 * 60 * 60)
         );
         const m = Math.floor(
            (distanceBetween % (1000 * 60 * 60)) /
               (1000 * 60)
         );
         const s = Math.floor(
            (distanceBetween % (1000 * 60)) / 1000
         );
         this.time = `${d}d ${h}h ${m}m ${s}s`;
         if (distanceBetween < 0) {
            clearInterval(interval);
            this.time = "Time's up!";
         }
      });
      return interval;
   }
   public getMonth(month: number): string {
      switch (month + 1) {
         case 1:
            return 'Jan';
            break;
         case 2:
            return 'Feb';
            break;
         case 3:
            return 'Mar';
            break;
         case 4:
            return 'Apr';
            break;
         case 5:
            return 'May';
            break;
         case 6:
            return 'Jun';
            break;
         case 7:
            return 'Jul';
            break;
         case 8:
            return 'Aug';
            break;
         case 9:
            return 'Sep';
            break;
         case 10:
            return 'Oct';
            break;
         case 11:
            return 'Nov';
            break;
         case 12:
            return 'Dec';
            break;
      }
   }
}
export const util = new Util();
