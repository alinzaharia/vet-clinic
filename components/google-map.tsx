"use client"

interface GoogleMapProps {
  address: string
  zoom?: number
}

export default function GoogleMap({ address, zoom = 35 }: GoogleMapProps) {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address)

  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?q=${encodedAddress}&zoom=${zoom}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        title="Google Maps"
      ></iframe>
    </div>
  )
}

