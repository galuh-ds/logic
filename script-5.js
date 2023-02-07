let c = 9

for (let x = 1; x <= c; x++) {
      for (let y = 1; y <= c; y++) {
        if (x <= y){
          document.write('-&nbsp&nbsp')
        }else {
            document.write('+ ')
        }
      }

      document.write('<br>')
 }
 document.write('<br><br>')

//--------done