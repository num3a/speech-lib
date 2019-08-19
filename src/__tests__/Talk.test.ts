import { blabla, TextTalk, TalkLanguage } from '../Talk';
test('Talk', () => {
  const say: TextTalk = {
    textToSay: 'Hello world',
    language: TalkLanguage.fr_FR,
  };

  const result: boolean = blabla(say);
  expect(result).toBe(false);
});
