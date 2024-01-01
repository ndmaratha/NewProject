import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
	return (
		<>
			<h1>{title}</h1>
			{isVisible ? (
				<div>
					<button onClick={()=>setIsVisible(false)}>Hide</button>
					<p>{desc}</p>
				</div>
			) : (
				<div>
					<button onClick={()=>setIsVisible(title)}>Show</button>
				</div>
			)}
		</>
	);
};
const About = () => {
    const [visible,setvisible]=useState("");
	return <>
    <Section title="one" desc="this is desc" isVisible={visible=="one"} setIsVisible={setvisible} />
    <Section title="two" desc="this is desc" isVisible={visible=="two"} setIsVisible={setvisible} />
    <Section title="three" desc="this is desc" isVisible={visible=="three"} setIsVisible={setvisible} />
    </>;
};
export default About;
