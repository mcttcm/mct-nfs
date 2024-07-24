import { Skeleton } from "../skeleton/Skeleton";
import { User } from "../user/User";

interface PodiumProps {
  userList: User[]
  isLoading: boolean
}

interface StepProps {
  user: User
  height: string
  number: string
  primary: string
  secondary: string
}

export function Podium({ userList, isLoading }: PodiumProps) {
  function Step({ user, height, number, primary, secondary }: StepProps) {
    if (isLoading || userList.length === 0) {
      return (
        <div className="w-full flex flex-col space-y-4 justify-center items-center">
          <div className="w-[60px]">
            <Skeleton />
          </div>
          <div className={`h-[${height}px] rounded-t-lg w-full animate-pulse bg-[#242424]`} />
        </div>
      );
    } else {
      return (
        <div className="w-full flex flex-col space-y-4 justify-center items-center">
          <div className="w-[60px]">
            <User
              id={user.id}
              name={user.name}
              status={user.status}
              src={user.src}
              fallen_time={user.fallen_time}
            />
          </div>
          <div
            style={{ color: secondary, height: height + "px", backgroundColor: primary }}
            className={`rounded-t-lg w-full`}>
            <div className="w-full pt-3 text-center text-3xl font-bold">{number}</div>
          </div>
        </div>
      );
    };
  }

  return (
    <div className="max-w-[300px] w-full flex justify-center items-end">
      <Step user={userList[1]} height="80" number="2" primary="#D0D0D0" secondary="#A1A1A1" />
      <Step user={userList[0]} height="110" number="1" primary="#FFD978" secondary="#C1A14D" />
      <Step user={userList[2]} height="60" number="3" primary="#C28867" secondary="#9F6747" />
    </div>
  );
}