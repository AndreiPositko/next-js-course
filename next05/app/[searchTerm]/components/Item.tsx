/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'; 

type Props = {
    result: Result, 
}

export default function Item({ result }: Props) {
  const itemTextColumn = (
    <div className='flex flex-col justify-center'>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?currId=${result.pageId}`}
          target="_blank "
          className='text-xl font-bold underline'
        >
          { result.title }
        </Link>
      </h2>
      <p>{ result.extract }</p>
    </div>
  )

  const content = result?.thumbnail?.source ? 
    (
      <article className='m-4 max-w-lg'>
        <div className='flex flex-grow gap-4'>
          <div className='flex flex-col justify-center'>
            <img
              src={ result.thumbnail.source }
              alt={ result.title }
              width={ result.thumbnail.width }
              height={ result.thumbnail.height }
              loading="lazy"
            />
            {itemTextColumn}
          </div>
        </div>
      </article>
    ) : (
      <article className='m-4 max-w-lg'>
        {itemTextColumn}
      </article>
    )
  return content;
}