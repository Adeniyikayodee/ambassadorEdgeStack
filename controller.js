// controller.js
const content = [
    { id: 1, name: "John Doe", age: 32 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "Jim Smith", age: 35 },
    { id: 4, name: "Jim SMith", age: 40}
  ];


const getContent = async (req,res) => {
    console.log("Fetching static content from Array of users.");

    if (content.length == null){
        console.log("No content to be fetched");
        return res.status(404).json({
            message: "No content to be fetched",
            content: content
        })
    }

    console.log("content fetched.",content);

    return res.status(200).json({
        message: "content fetched",
        content: content,
    })
}

module.exports = {getContent};