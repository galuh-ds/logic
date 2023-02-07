let b = 9

for (let x = 1; x <= b; x++) {
      for (let y = 1; y <= b; y++) {
        if (x <= y){
          document.write('+')
        }else {
            document.write('-  ')
        }
      }

      document.write('<br>')
 }
 document.write('<br><br>')