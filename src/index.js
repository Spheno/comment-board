'use strict'
import './pages/index.css'
import { Section } from './components/Section';
import { Comment } from './components/Comment';
import { FormValidator } from './components/FormValidator';
import { Form } from './components/Form';
import { commentList } from './utils/constants';

const buttonSubmit = document.querySelector('.form__button-submit');

const defaultCommentList = new Section({
  renderer: (comment) => {
    createComment(comment)
  }
}, '.comments__title');

defaultCommentList.renderItems(commentList);

function createComment(data) {
  const comment = new Comment({
    data: data,
    commentSelector: '#comment',
  })
  const commentElement = comment.generateComment();
  defaultCommentList.addItem(commentElement);
}

const formValidation = new FormValidator(document.querySelector('.form__container'));
formValidation.enableValidation();

const createNewComment = new Form((formData) => {

  if (formData) {
    createComment(formData)
    buttonSubmit.disabled = true;
  }

});

createNewComment.setEventListeners();
