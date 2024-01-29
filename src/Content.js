const Content = () => {

    const handleNameChange = () => {
        let names = ['Navaraj', 'Aayushree', 'Kabita']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }

    const handleClick = () => {
        console.log("You clicked me")
    }
    const handleClick2 = (name) => {
        console.log(`My name is ${name}`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return(
        <main>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=> handleClick2('Navaraj')}>Click for Name</button>
            <button onClick={(e)=> handleClick3(e)}>Click for event</button>
        </main>
    )

}

export default Content;