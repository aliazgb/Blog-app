interface EmptyProps {
  resourceName: string;
}

const Empty = ({ resourceName }: EmptyProps) => {
  return (
    <p className="font-bold text-secondary-700">No {resourceName} found.</p>
  );
};

export default Empty;
