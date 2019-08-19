const recognition: SpeechRecognition = new SpeechRecognition();
recognition.onresult = function(event) {
    if (event.results.length > 0) {
        q.value = event.results[0][0].transcript;
        q.form.submit();
    }
}
