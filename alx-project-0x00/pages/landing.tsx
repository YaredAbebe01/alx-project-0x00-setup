import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="flex gap-4 mt-4">
        <Button
          title="Small Button"
          styles="px-2 py-1 text-sm bg-blue-500 text-white rounded-sm"
        />

        <Button
          title="Medium Button"
          styles="px-4 py-2 text-base bg-blue-500 text-white rounded-md"
        />

        <Button
          title="Large Button"
          styles="px-6 py-3 text-lg bg-blue-500 text-white rounded-full"
        />
      </div>
    </div>
  )
}

export default Landing;
