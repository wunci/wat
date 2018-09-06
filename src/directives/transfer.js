
const directive = {
    inserted(el){
        document.body.appendChild(el)
    },
    unbind(el){
        if(el){
            document.body.removeChild(el)
        }
    }
};

export default directive;