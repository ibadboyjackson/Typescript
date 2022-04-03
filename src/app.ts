const compteur = document.querySelector("#compteur")
let i = 0

const increment = (e: Event) => {
    i++

    const span = compteur?.querySelector('span')

    if (span) {

        span.innerText = i.toString()

    }

}

function printId  (id: string | number) {

    if (typeof id === 'number') {

        console.log((id * 3).toString())

    }
    else
    {
        console.log(id.toUpperCase())
    }

}


compteur?.addEventListener('click', increment)

const a: string = 'Hello World'
const n: number = 89
const c: boolean = false
const d: string[] = ['a', 'b', 'c']

const user: {firstname: string, lastname: string} = {firstname: 'Herman', lastname: 'jackson'}

const ab: (e: MouseEvent) => void = (e: MouseEvent): void => {


}

const cb: Function = (e: MouseEvent): void => {

}

function hero (id: number): void
{
    console.log(id)
}


function identity <ArgType> (a: ArgType): ArgType {
    return a
}


const aa = identity <number>  (8)