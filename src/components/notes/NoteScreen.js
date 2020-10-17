import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete='off'
          />

          <textarea
            placeholder="what happened today?"
            className="notes__textarea"
          ></textarea>

          <div className="notes__image">
            <img
              src="https://static.toiimg.com/thumb/msid-74343235,width-640,resizemode-4/74343235.jpg"
              alt="imagen"
            />
          </div>
        </div>
      </div>
    );
}
