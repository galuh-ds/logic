
let h = 9

for (let x = 1; x <= h; x++) {
      for (let y = 1; y <= h; y++) {
        if (y - x  == 0){
          document.write('+')
        }else {
            document.write('- &nbsp')
        }
      }

      document.write('<br>')
}

document.write('<br><br>')