import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.186952593199!2d30.525140815376133!3d50.43761829617108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf01aedd1ea7%3A0xeed100fd1e013c56!2zUGFydXMsINCy0YPQu9C40YbRjyDQnNC10YfQvdC40LrQvtCy0LAsIDIsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1538506105808"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="the_map"
            ></iframe>

            <div className='location_tag'>
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;