import React from 'react'

export const JournalEntry = () => {
    return (
      <div className="journal__entry pointer">
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg)",
        }}
        ></div>

        <div className="journal__entry-body">
            <p className='jounal__entry-title'>
                Un nuevo Día
            </p>
            <p className='jounal__entry-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
      </div>
    );
}
