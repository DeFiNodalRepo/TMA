import React from 'react'

interface Article {
    uri: string;
    externalURL: string;
    title: string;
    description: string;
    createdAt: string;
    pinned: boolean;
    isEnabled: boolean;
  }

  interface NewsProps {
    news: Article[];
  }
function News({news}: NewsProps) {

    console.log(news)
  return (
    <div className='mb-6'>
			<h1 className="text-2xl">News</h1>     
			{news?.map((article, index) => (
				<a key={index} href={article.externalURL} target="_blank" rel="noopener noreferrer" className="block">
					<div className="rounded-md p-4 mt-2 border border-gray-700 shadow-lg shadow-gray-800/40">
						<div className="flex">
							<div className="ml-3">
								<h3 className="text-sm font-medium text-gray-300">{article.title}</h3>
								<div className="mt-2 text-sm text-gray-400">
								<p>{article.description}</p>
								</div>
							</div>
						</div>
					</div>
				</a>
        ))}
      </div>
  )
}

export default News