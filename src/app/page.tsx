import Employees from './employees'
import Metamask from './metamask'
import Wrapper from './wrapper'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="flex flex-row items-center justify-between w-full">
        <div className="flex-1">
          Silent Exchange
        </div>
        <div>
          <Wrapper>
            <Metamask />
          </Wrapper>
        </div>
      </header>
      <section className='flex flex-col w-full mt-8'>
        <Employees />
      </section>
    </main>
  )
}
