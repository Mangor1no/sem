import { IconStar, IconStarBorder } from 'constants/Icons';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import ReactStars from 'react-rating-stars-component';
import { currentProfileSelector } from 'data/selectors/userSelector';
import * as style from '@dicebear/micah';
import { useSelector } from 'react-redux';

const Comment = () => {
  const [avatar, setAvatar] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const currentProfile = useSelector(currentProfileSelector);

  useEffect(() => {
    const svg = createAvatar(style, {
      seed: currentProfile.username,
      width: 38,
      height: 38,
      // ... and other options
    });
    setAvatar(svg);
  }, [currentProfile]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleReset = () => {
    setRating(0);
    setText('');
  };

  const handlePost = () => {
    setCommentList([
      ...commentList,
      {
        username: currentProfile.username,
        createdAt: Date.now(),
        comment: text,
        rating,
      },
    ]);
  };

  return (
    <div>
      <p className="font-poppins text-base font-bold">Write a comment</p>
      <div className="mt-2 mb-4">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={26}
          activeColor="#AA4630"
          emptyIcon={
            <div className="mr-[5px]">
              <IconStarBorder />
            </div>
          }
          filledIcon={
            <div className="mr-[5px]">
              <IconStar />
            </div>
          }
          value={rating}
        />
      </div>
      <textarea
        cols="20"
        className="border border-[#B1B1B1] focus:outline-none w-full mb-4 p-2 font-poppins text-sm"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex items-center justify-end font-poppins">
        <button
          type="button"
          className="w-[90px] mr-5 py-2 border border-primary text-primary"
          onClick={handleReset}
        >
          Cancel
        </button>
        <button
          type="button"
          className="w-[90px] py-2 bg-primary text-white border border-primary hover:text-primary hover:bg-[#F2F2F2] active:bg-active active:border-active active:text-white transition duration-150 ease-in-out"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
      {commentList
        .sort((a, b) => b?.createdAt - a?.createdAt)
        .map((comment, index) => (
          <div key={index} className="flex font-poppins text-sm py-4 border-b border-disabled">
            <div className="bg-blue-400 w-[50px] h-[50px] min-w-[50px] rounded-full mr-4 relative flex items-center justify-center">
              <div dangerouslySetInnerHTML={{ __html: avatar }} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{comment.username}</p>
              <div className="flex items-center my-2">
                {Array(comment.rating).fill(
                  <span className="mr-[5px]">
                    <IconStar />
                  </span>
                )}
              </div>
              <span className="mr-2 text-xs mb-2">
                {dayjs(comment.createdAt).format('MMM DD, YYYY')}
              </span>{' '}
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comment;
