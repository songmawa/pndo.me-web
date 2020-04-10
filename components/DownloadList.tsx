import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

function DownloadList({ children, data }: any) {
  
	const router = useRouter();

	const copyFunc = (e: any) => {
		e.target.select();
		document.execCommand("copy");
	}

	const listItems = data.map((item) =>
	<li key={item.id}> 
		<label className="dl-text">
			{item.name}
			<input type="text" className="full-width text-center" value={window.location.href+'file/'+item.id} onClick={copyFunc} readOnly />
			<progress />
		</label>
	</li>
);

  return (
    <ul className="download">
		{listItems}
    </ul>
  )
}

export default DownloadList;