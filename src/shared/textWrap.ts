export const textWrap = (text,n) => {
    if(text.length > 2){
        const arr = text.split('')
        arr.splice(n,0,'\n')
        return arr.join('')
    } else {
        return text
    }
}