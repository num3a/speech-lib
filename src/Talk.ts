 enum TalkLanguage {
    fr,
    fr_FR,
    en,
    en_US
}

interface TextTalk {
    textToSay: string,
    language: TalkLanguage,
}

 function blabla(say: TextTalk): boolean {

    return false;
}


export {
    TalkLanguage,
    TextTalk,
    blabla
}
