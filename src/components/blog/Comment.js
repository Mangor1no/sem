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
  const [commentList, setCommentList] = useState([
    {
      username: 'hainq1221',
      createdAt: Date.now(),
      comment: 'Very wow, much love',
      avatar: createAvatar(style, {
        seed: Date.now().toString(),
        width: 120,
        height: 120,
        // ... and other options
      }),
    },
    {
      username: 'minhthu',
      createdAt: Date.now() - 124000,
      comment: 'Very love, much wow',
      avatar: createAvatar(style, {
        seed: (Date.now() + 123940).toString(),
        width: 120,
        height: 120,
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
      width: 120,
      height: 120,
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
      <p className="text-[32px] leading-[48px] font-bold mb-12">Comments ({commentList.length})</p>
      <div className="space-y-12 mb-24">
        {commentList
          .sort((a, b) => b?.createdAt - a?.createdAt)
          .map((comment, index) => (
            <div key={index} className="flex items-center font-neue text-black-50">
              <div className="bg-blue-400 w-[120px] h-[120px] min-w-[120px] mr-4 relative flex items-center justify-center rounded-[22px] overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: comment.avatar }} />
              </div>
              <div className="flex-1">
                <p className="text-lg mb-[6px]">{comment.username}</p>
                <p className="mb-4 font-bold">{dayjs(comment.createdAt).format('MMM DD, YYYY')}</p>
                <p className="">{comment.comment}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="mb-24">
        <p className="text-[32px] leading-[48px] font-bold mb-12">Leave a comments:</p>
        <div className="text-black-50">
          <textarea
            rows="8"
            className="border border-[#9D9D9D50] focus:outline-none w-full mb-4 p-2 text-sm rounded placeholder-black-10"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder={`Comment by ${currentProfile.username}`}
          />
          <button
            type="button"
            className="btn-secondary px-8 py-3 transition duration-150 ease-in-out"
            onClick={handlePost}
          >
            Post review
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;
