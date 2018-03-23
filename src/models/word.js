export default class Word {
  constructor ({
    id, langFrom, langTo, wordText, meanings = [], meta = []
  } = {}) {
    this.id = id
    this.langFrom = langFrom
    this.langTo = langTo
    this.wordText = wordText
    this.meanings = meanings
    this.meta = meta
  }
}
