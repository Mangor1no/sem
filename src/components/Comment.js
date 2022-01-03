import { IconStar, IconStarBorder, IconTooltip } from 'constants/Icons';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import ReactStars from 'react-rating-stars-component';
import { currentProfileSelector } from 'data/selectors/userSelector';
import * as style from '@dicebear/micah';
import { useSelector } from 'react-redux';

const Comment = () => {
  const [avatar, setAvatar] = useState(null);
  const [commentList, setCommentList] = useState([
    {
      username: 'hainq1221',
      createdAt: Date.now(),
      comment: 'Very wow, much love',
      rating: 5,
      avatar: createAvatar(style, {
        seed: Date.now().toString(),
        width: 58,
        height: 58,
        // ... and other options
      }),
    },
    {
      username: 'minhthu',
      createdAt: Date.now() - 124000,
      comment: 'Very love, much wow',
      rating: 5,
      avatar: createAvatar(style, {
        seed: (Date.now() + 123940).toString(),
        width: 58,
        height: 58,
        // ... and other options
      }),
    },
  ]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  const currentProfile = useSelector(currentProfileSelector);

  useEffect(() => {
    const svg = createAvatar(style, {
      seed: currentProfile.username,
      width: 58,
      height: 58,
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
        avatar,
      },
    ]);
  };

  return (
    <>
      <div className="divide-y divide-black-2">
        {commentList
          .sort((a, b) => b?.createdAt - a?.createdAt)
          .map((comment, index) => (
            <div key={index} className="flex flex-col font-neue py-4 text-black-50">
              <div className="bg-blue-400 w-[80px] h-[80px] min-w-[80px] rounded-md mr-4 relative flex items-center justify-center">
                <div dangerouslySetInnerHTML={{ __html: comment.avatar }} />
              </div>
              <div className="up-arrow">
                <div className="flex items-center my-2">
                  {Array(comment.rating).fill(
                    <span className="mr-[5px]">
                      <IconStar size={15} />
                    </span>
                  )}
                </div>
                <p className="font-medium">
                  {comment.username}
                  {' - '}
                  <span className="mr-2 text-xs mb-2 font-normal">
                    {dayjs(comment.createdAt).format('MMM DD, YYYY')}
                  </span>
                </p>

                <p className="text-black-30">{comment.comment}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="uppercase text-base text-black-50"
      >
        Add Review
      </button>
      {show && (
        <div className="text-black-50">
          <div className="mt-2 mb-4 flex items-center space-x-2">
            <span>
              Rating <span className="text-red-600">*</span>:
            </span>
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
                  <IconStar size={12} />
                </div>
              }
              value={rating}
            />
          </div>
          <p>Your review</p>
          <textarea
            cols="20"
            className="border border-[#B1B1B1] focus:outline-none w-full mb-4 p-2  text-sm"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            type="button"
            className="btn-secondary px-8 py-3 transition duration-150 ease-in-out"
            onClick={handlePost}
          >
            Post review
          </button>
        </div>
      )}
    </>
  );
};

export default Comment;
