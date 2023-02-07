let f = 9

for (let x = 1; x <= f; x++) {
      for (let y = 1; y <= f; y++) {
        if (y + x  == 10){
          document.write('+')
        }else if (y - x == 0) {
            document.write('+')
        }else {
            document.write('- ')
        }
      }

      document.write('<br>')
}

document.write('<br><br>')