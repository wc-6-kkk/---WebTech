
function InfoBox({lesson}) {

    function klikniecie(name){
        console.log("kliknięto technologie ", name)
    }


  return (
    <button onClick={() => klikniecie(lesson)}>
        Pokaż {lesson}
    </button>
  );
}

export default InfoBox