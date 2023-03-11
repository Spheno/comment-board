export class Comment {
  constructor({ data, commentSelector }) {
    this._name = data.name;
    this._date = data.date;
    this._text = data.text;
    this._commentSelector = document.querySelector(commentSelector);
  }

  _getTemplate() {
    const commentElement = this._commentSelector
      .content
      .querySelector('.comment')
      .cloneNode(true);

    return commentElement;
  }

  _addListeners() {
    this._element.querySelector('.comment__button-like').addEventListener('click', (e) => { e.target.classList.toggle('comment__button-like_active') });
    this._element.querySelector('.comment__button-del').addEventListener('click', () => { this.deleteComment() });
  }

  deleteComment() {
    this._element.remove();
    this._element = null;
  }

  _generateDate() {

    let now = new Date();
    let currentTime = ', ' + now.getHours() + ':' + now.getMinutes()
    let today = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2)
    let yesterday = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + (now.getDate() - 1)).slice(-2)
    let tomorrow = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + (now.getDate() + 1)).slice(-2)

    if (!this._date || today == this._date) {
      return this._date = 'сегодня' + currentTime;
    }
    if (yesterday == this._date) {
      return this._date = 'вчера' + currentTime;
    }
    if (tomorrow == this._date) {
      return this._date = 'завтра' + currentTime;
    }
    if (this._date.length > 10) {
      return this._date
    }

    return this._date + currentTime
  }

  generateComment() {

    this._element = this._getTemplate();
    this._element.querySelector('.comment__user').textContent = this._name;
    this._element.querySelector('.comment__text').textContent = this._text;
    this._element.querySelector('.comment__date').textContent = this._generateDate();
    this._addListeners();

    return this._element;
  }
}