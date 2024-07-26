import { NewsProps } from "../types"

function News({news}: NewsProps) {

  return (
    <div className='mb-6'>
			<h1 className="text-2xl">News</h1>     
			{news?.map((article, index) => (
				<a key={index} href={article.externalURL} target="_blank" rel="noopener noreferrer" className="block">
					<div className="p-4 mt-2 border border-gray-700 rounded-md shadow-lg shadow-gray-800/40">
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