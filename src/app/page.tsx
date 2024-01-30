import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-4">Tailwind theme font sizes</h1>
        <p className="text-5xl">5xl font size</p>
        <p className="text-4xl">4xl font size</p>
        <p className="text-3xl">3xl font size</p>
        <p className="text-2xl">2xl font size</p>
        <p className="text-xl">xl font size</p>
        <p className="text-lg">lg font size</p>
      </div>

      <hr />

      <main className="mt-12">
        <h1 className="mb-4">Typography plugin (prose) font sizes</h1>
        <section className="prose max-w-none">
          <hgroup>
            <h1>This is a h1 prose heading</h1>
            <h2>This is a h2 prose heading</h2>
            <h3>This is a h3 prose heading</h3>
            <h4>This is a h4 prose heading</h4>
            <h5>This is a h5 prose heading</h5>
            <h6>This is a h6 prose heading</h6>
          </hgroup>
        </section>
      </main>
    </div>
  )
}
