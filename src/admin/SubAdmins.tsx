import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

type SubAdmin = {
  email: string;
};

const STORAGE_KEY = "bvp.admin.subAdmins";

const SubAdmins = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [list, setList] = useState<SubAdmin[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as SubAdmin[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  }, [list]);

  const addEmail = () => {
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({ title: "Invalid email", description: "Please enter a valid email." });
      return;
    }
    if (list.some((s) => s.email === trimmed)) {
      toast({ title: "Already added", description: "That email is already a sub admin." });
      return;
    }
    setList((prev) => [...prev, { email: trimmed }]);
    setEmail("");
    toast({ title: "Sub admin added", description: trimmed });
  };

  const removeEmail = (target: string) => {
    setList((prev) => prev.filter((s) => s.email !== target));
    toast({ title: "Removed", description: target });
  };

  const sendOtp = (target: string) => {
    // Frontend-only simulation: In real backend, trigger email OTP here
    toast({ title: "OTP sent", description: `OTP sent to ${target}` });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <div className="mb-4">
        <div className="text-2xl font-semibold">Sub Admins</div>
        <div className="text-sm text-muted-foreground">Manage emails allowed to access limited admin features</div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Add sub admin</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-end">
            <div className="space-y-2">
              <Label htmlFor="sub-email">Email</Label>
              <Input id="sub-email" placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Button onClick={addEmail}>Add</Button>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            {list.length === 0 && <div className="text-sm text-muted-foreground">No sub admins added yet.</div>}
            {list.map((item) => (
              <div key={item.email} className="flex items-center justify-between rounded-md border p-3">
                <div className="text-sm">{item.email}</div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => sendOtp(item.email)}>Send OTP</Button>
                  <Button variant="destructive" onClick={() => removeEmail(item.email)}>Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubAdmins;


