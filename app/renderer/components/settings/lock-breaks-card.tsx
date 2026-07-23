import SettingsCard from "./settings-card";
import { Settings } from "../../../types/settings";

interface LockBreaksCardProps {
  settingsDraft: Settings;
  onSwitchChange: (field: string, checked: boolean) => void;
}

export default function LockBreaksCard({
  settingsDraft,
  onSwitchChange,
}: LockBreaksCardProps) {
  return (
    <SettingsCard
      title="Screen Lock Breaks"
      helperText="Count locking your screen as a break, independent of general inactivity."
      toggle={{
        checked: settingsDraft.lockScreenAsBreakEnabled,
        onCheckedChange: (checked) =>
          onSwitchChange("lockScreenAsBreakEnabled", checked),
      }}
    />
  );
}
