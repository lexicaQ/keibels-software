
export const getProjectImage = (projectId: string) => {
  switch(projectId.toLowerCase()) {
    case 'copyclipcloud':
      return "/lovable-uploads/425434aa-0f1f-43b0-a36e-6667edfa2c9d.png"; // Using original for now
    case 'apptimer':
      return "/lovable-uploads/00c41542-7a3b-4c8a-9808-8a57caab29cd.png";
    case 'zentro':
      return "/lovable-uploads/f309b3f3-c5db-4782-8bbf-d76ed553e43b.png";
    case 'nightmanager':
      return "/lovable-uploads/4a2f84a9-773a-44d4-bd25-d6e9fd2679ad.png";
    case 'todomanager':
      // We'll use our custom component for this
      return "custom_todomanager";
    case 'copychecker':
      // We'll use our custom component for this
      return "custom_copychecker";
    default:
      return "/placeholder.svg";
  }
};

export const isCustomImage = (imagePath: string): boolean => {
  return imagePath.startsWith("custom_");
};

export const getCustomImageType = (imagePath: string): 'todoManager' | 'copyClipCloud' | 'copyChecker' => {
  if (imagePath === "custom_todomanager") return "todoManager";
  if (imagePath === "custom_copyclipcloud") return "copyClipCloud";
  if (imagePath === "custom_copychecker") return "copyChecker";
  return "todoManager"; // Default
};

