function OnClickLesson(){

    function showMessage() {
        console.log("Kliknięto przycisk")
    }

    return(
        <button onClick={showMessage}>
            Kliknij
        </button>
    );
}

export default OnClickLesson;