import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const baseTitle = "TMTG Bangladesh Delegation";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    
    // Update meta description based on page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      let description = "Join the Bangladesh Delegation in the peaceful civilian flotilla initiative to break the illegal blockade of Gaza and deliver life-saving humanitarian aid by sea.";
      
      if (title === "Gallery") {
        description = "View photos and images from our peaceful flotilla mission to Gaza. See the journey of Bangladesh Delegation and our humanitarian efforts.";
      } else if (title === "Donate") {
        description = "Support the Bangladesh Delegation flotilla mission to Gaza. Your donation helps fund our peaceful humanitarian aid delivery by sea.";
      }
      
      metaDescription.setAttribute('content', description);
    }
  }, [title]);
};

export default usePageTitle;