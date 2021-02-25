let score = prompt("Please , Enter your Score");
if (score <= 0 || score > 100) {
    document.getElementById("result").innerHTML = "Invalid score, Please try again"
    alert("Pleae try again")
    prompt("Please , Enter your Score")
}else if (score >= 80) {
        document.getElementById("result").innerHTML = "You get grade \"A\""
        }else if (score >= 75) {
            document.getElementById("result").innerHTML = "You get grade \"B+\""
         } else if (score >= 70) {
                document.getElementById("result").innerHTML = "You get grade \"B\""
          } else if (score >= 65) {
                    document.getElementById("result").innerHTML = "You get grade \"C+\""
           } else if (score >= 60) {
                        document.getElementById("result").innerHTML = "You get grade \"C\""
             }  else if (score >= 55) {
                            document.getElementById("result").innerHTML = "You get grade \"D+\""
                }   else if (score >= 50) {
                                document.getElementById("result").innerHTML = "You get grade \"D\""
                }else if (score < 50) {
                                    document.getElementById("result").innerHTML = "You get grade \"F\""
                                }
                            