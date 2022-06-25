let turn = true; // ამ ცვლადით კონტროლდდება მოთამაშე, ნაგუილისხმევია რომ თუ true მაშინ თამაშიბს X,  თუ false თამაშობს 0

function getWinner() {
  //ფუნქცია, რომელიც ამოწმებს გამარჯვებულს
  const ujra1 = document.getElementById('ujra1').innerText; // ამ და მომდევნო ცვლადებში ინახება უჯრაში ჩაწერილი მნიშნელობა
  const ujra2 = document.getElementById('ujra2').innerText;
  const ujra3 = document.getElementById('ujra3').innerText;
  const ujra4 = document.getElementById('ujra4').innerText;
  const ujra5 = document.getElementById('ujra5').innerText;
  const ujra6 = document.getElementById('ujra6').innerText;
  const ujra7 = document.getElementById('ujra7').innerText;
  const ujra8 = document.getElementById('ujra8').innerText;
  const ujra9 = document.getElementById('ujra9').innerText;

  if (ujra1 == ujra2 && ujra2 == ujra3 && ujra1 != '') {
    // პირობით ოპერატორებში ჩამოთვლილია ყველა მომგებიანი კომბინაცია
    return true;
  } else if (ujra4 == ujra5 && ujra5 == ujra6 && ujra4 != '') {
    return true;
  } else if (ujra7 == ujra8 && ujra8 == ujra9 && ujra7 != '') {
    return true;
  } else if (ujra1 == ujra4 && ujra4 == ujra7 && ujra1 != '') {
    return true;
  } else if (ujra8 == ujra5 && ujra5 == ujra2 && ujra8 != '') {
    return true;
  } else if (ujra9 == ujra6 && ujra6 == ujra3 && ujra9 != '') {
    return true;
  } else if (ujra7 == ujra5 && ujra5 == ujra3 && ujra7 != '') {
    return true;
  } else if (ujra9 == ujra5 && ujra5 == ujra1 && ujra9 != '') {
    return true;
  } else {
    //და ე.წ ნიჩია, ფრე
    if (
      ujra1 != '' &&
      ujra2 != '' &&
      ujra3 != '' &&
      ujra4 != '' &&
      ujra5 != '' &&
      ujra6 != '' &&
      ujra7 != '' &&
      ujra8 != '' &&
      ujra9 != ''
    ) {
      document.getElementById('res').innerHTML = 'ფრე';
    }
  }
}

function writeIn(id) {
  //ფუნქცია, რომელიც onclick ივენთზე უჯრებში ჩაწერს მნიშვნელობას . პარამეტრიანი ფუნქციაა და გადაეცემა დივის აიდი, რომელიც მიეთითება html-ში უშუალოდ ფუნქციის გამოძახებისას
  if (document.getElementById(id).innerText == '') {
    //ამოწმებს ცარიელი თუ არის უჯრა, ანუ უკვე ხომ არ წერია მასში მნიშვნელობა
    if (turn == true) {
      //როგორც ზემოთ აღვნიშე, turn-ით ვაკონტროლებთ მოთამაშეს, თუ ==true  მაშინ თამაშობს x
      document.getElementById(id).innerHTML = 'X'; //და მაუსის დაწკაპუნებაზე შესაბამის უჯრაში უნდა ჩაიწეროს X
      turn = false; //მოთამაშე გახდა 0
      document.getElementById('res').innerHTML = 'თამაშობს: O';

      if (getWinner()) {
        //ყოველ ჩაწერაზე ვამოწმებთ არის თუ არა გამარჯვებული რომელიმე კომბინაციით
        document.getElementById('res').innerHTML = 'გაიმარჯვა: X-მა'; //თუ კი, მაშინ გაიმარჯვა x-მა მოთამაშემ
      }
    } else {
      //თუ turn == false მოთამაშეა 0
      document.getElementById(id).innerHTML = 'O'; //და მაუსის დაწკაპუნებაზე შესაბამის უჯრაში უნდა ჩაიწეროს 0
      turn = true; //მოთამაშე გახდა X
      document.getElementById('res').innerHTML = 'თამაშობს: X';

      if (getWinner()) {
        //ყოველ ჩაწერაზე ვამოწმებთ არის თუ არა გამარჯვებული რომელიმე კომბინაციით
        document.getElementById('res').innerHTML = 'გაიმარჯვა: O-მა'; //თუ კი, მაშინ გაიმარჯვა O-მა მოთამაშემ
      }
    }
  }
}

function again() {
  //თავიდან დაწყების ფუნქცია, რომელიც გაასუფთავებს ყველა უჯრას და მოთამაშეს გახდის X-ს ანუ turn=true
  document.getElementById('ujra1').innerHTML = '';
  document.getElementById('ujra2').innerHTML = '';
  document.getElementById('ujra3').innerHTML = '';
  document.getElementById('ujra4').innerHTML = '';
  document.getElementById('ujra5').innerHTML = '';
  document.getElementById('ujra6').innerHTML = '';
  document.getElementById('ujra7').innerHTML = '';
  document.getElementById('ujra8').innerHTML = '';
  document.getElementById('ujra9').innerHTML = '';

  document.getElementById('res').innerHTML = 'თამაშობს: X';
  turn = true;
}

function colorBody() {
  //ბექგრაუნდის ფერის რენდომ შეცვლის ფუნქცია
  const Getbody = document.getElementById('getbody');

  Getbody.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
