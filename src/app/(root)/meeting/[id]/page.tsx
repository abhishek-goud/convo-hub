
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";

const Meeting = () => {
  const params = useParams(); // Access dynamic route parameters
  const meetingId = params?.id as string; // Extract the "id" parameter

  const {user, isLoaded} = useUser();

  const [isSetUpComplete, setIsSetUpComplete] = useState(false);
  const {call, isCallLoading} = useGetCallById(meetingId);

  if(!isLoaded || isCallLoading) return <Loader/>


  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ? (
            <MeetingSetup setIsSetUpComplete={setIsSetUpComplete}/>
          ) : (
            <MeetingRoom/>
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
};

export default Meeting;
/* eslint-disable @typescript-eslint/no-unused-vars */






// "use client"
// import { useUser } from "@clerk/nextjs";

// const Meeting = async({ params }: { params: Promise<{ id: string }> }) => {
    // const meetingId = (await params).id;
    // const {user, isLoaded} = useUser();
//   return <div>Meeting Room: #{meetingId}</div>;
// };

// export default Meeting;