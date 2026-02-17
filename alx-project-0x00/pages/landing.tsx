import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="flex gap-3">
        <Button title="Small" className="text-sm rounded-sm" />
        <Button title="Medium" className="text-base rounded-md" />
        <Button title="Large" className="text-lg rounded-full" />
      </div>

      <Card />
    </div>
  )
}

export default Landing
