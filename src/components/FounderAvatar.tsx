import { useEffect, useId, useState } from "react";
import { Camera } from "lucide-react";

type FounderAvatarProps = {
  name: string;
  slug: string;
  photo: string;
};

function readStoredPhoto(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function FounderAvatar({ name, slug, photo }: FounderAvatarProps) {
  const inputId = useId();
  const storageKey = `bizdaptive-founder-${slug}`;
  const [uploadedSrc, setUploadedSrc] = useState<string | null>(() => readStoredPhoto(storageKey));
  const [defaultFailed, setDefaultFailed] = useState(false);

  useEffect(() => {
    setUploadedSrc(readStoredPhoto(storageKey));
  }, [storageKey]);

  const displaySrc = uploadedSrc || (!defaultFailed ? photo : null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result as string;
      try {
        localStorage.setItem(storageKey, data);
      } catch {
        // Still show preview even if storage is full.
      }
      setUploadedSrc(data);
      setDefaultFailed(false);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleImageError = () => {
    if (uploadedSrc) {
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
      setUploadedSrc(null);
      return;
    }
    setDefaultFailed(true);
  };

  return (
    <label
      htmlFor={inputId}
      className="founder-profile-card__avatar founder-profile-card__avatar--upload"
      aria-label={`Upload photo for ${name}`}
    >
      {displaySrc ? (
        <img src={displaySrc} alt={name} onError={handleImageError} />
      ) : (
        <span className="founder-profile-card__avatar-placeholder">
          <Camera strokeWidth={1.6} aria-hidden />
          <span>Add photo</span>
        </span>
      )}
      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleUpload}
      />
    </label>
  );
}
