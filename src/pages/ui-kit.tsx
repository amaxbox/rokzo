import { useState } from "react"
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Link2,
  MoreHorizontal,
  Search,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const sections = [
  ["colors", "Colors"],
  ["type", "Typography"],
  ["buttons", "Buttons"],
  ["badges", "Badges"],
  ["forms", "Forms"],
  ["overlays", "Overlays"],
  ["patterns", "Product patterns"],
  ["data", "Data & states"],
] as const

const swatches = [
  { name: "Paper White", token: "background", cls: "bg-background border" },
  { name: "Sheet", token: "muted", cls: "bg-muted" },
  { name: "Hairline", token: "border", cls: "bg-border" },
  { name: "Muted Ink", token: "muted-foreground", cls: "bg-muted-foreground" },
  { name: "Ink", token: "foreground", cls: "bg-foreground" },
  { name: "Ink Raspberry", token: "primary", cls: "bg-primary" },
  { name: "Raspberry hover", token: "primary-hover", cls: "bg-primary-hover" },
  { name: "Deep Slate", token: "fact", cls: "bg-fact" },
  { name: "Slate soft", token: "fact-soft", cls: "bg-fact-soft" },
  { name: "Draft Amber", token: "draft", cls: "bg-draft" },
  { name: "Destructive", token: "destructive", cls: "bg-destructive" },
]

const jobs = [
  { company: "Figma", role: "Senior Product Designer", score: 86, posted: "2 min ago", gap: "Do you have B2B SaaS experience?" },
  { company: "Notion", role: "Staff Designer, Growth", score: 74, posted: "18 min ago", gap: "How many experiments have you run?" },
  { company: "Linear", role: "Product Designer", score: 68, posted: "1 h ago", gap: "Any experience with design systems?" },
]

function SectionTitle({ id, children, hint }: { id: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 id={id} className="scroll-mt-24 text-[1.375rem] leading-tight font-semibold">
        {children}
      </h2>
      {hint ? <p className="max-w-[48ch] text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  )
}

export function UiKitPage() {
  const [tone, setTone] = useState([62])
  const [notify, setNotify] = useState(true)

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="grid size-6 place-items-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">R</span>
            Rokzo UI Kit
          </a>
          <nav aria-label="Sections" className="ml-auto hidden gap-1 md:flex">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-md px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <Badge variant="outline" className="ml-auto md:ml-2">shadcn · radix-nova</Badge>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6">
        <section className="mb-20 max-w-[62ch]">
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold">
            Warmth lives in the ink, not the paper.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The project kit on top of shadcn/ui. One accent, one humanist sans, a flat white sheet.
            Two content states the product cannot live without: a <Badge variant="fact">confirmed fact</Badge> and
            an agent&apos;s <Badge variant="draft">draft</Badge>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              Apply with tailored resume <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline">See why 86</Button>
            <Button size="lg" variant="ghost">Not now</Button>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-20">
          <SectionTitle id="colors" hint="Raspberry on no more than 10% of any screen. Score is never red / amber / green.">
            Colors
          </SectionTitle>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
            {swatches.map((s) => (
              <li key={s.token} className="space-y-2">
                <div className={`h-16 rounded-lg ${s.cls}`} />
                <div className="text-sm leading-tight font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground">--{s.token}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <SectionTitle id="type" hint="Source Sans 3, weights 400 / 500 / 600. Numbers are tabular everywhere.">
            Typography
          </SectionTitle>
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <dl className="space-y-4 text-sm">
              {[
                ["Display", "600 · clamp(1.75rem, 4vw, 2.5rem) · 1.15"],
                ["Headline", "600 · 1.375rem · 1.25"],
                ["Title", "500 · 1.0625rem · 1.35"],
                ["Body", "400 · 1rem · 1.55 · 60–70ch"],
                ["Label", "500 · 0.8125rem · 1.3 · no uppercase"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] gap-2">
                  <dt className="font-medium">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="space-y-4">
              <p className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold">Senior Product Designer, EU remote</p>
              <p className="text-[1.375rem] leading-[1.25] font-semibold">Figma · Senior Product Designer</p>
              <p className="text-[1.0625rem] leading-[1.35] font-medium">Do you have B2B SaaS experience?</p>
              <p className="max-w-[65ch]">
                Led the redesign of the billing flow for 40k teams; cut failed payments by 18% in two quarters.
                Every line in a tailored resume traces back to a fact you confirmed.
              </p>
              <p className="text-[0.8125rem] leading-[1.3] font-medium text-muted-foreground">Confirmed · from LinkedIn export, Mar 2026</p>
              <p className="text-2xl font-semibold">86 <span className="text-base font-normal text-muted-foreground">/ 100 match</span></p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <SectionTitle id="buttons" hint="Primary is the only raspberry element. Hover goes darker, not lighter.">
            Buttons
          </SectionTitle>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Remove fact</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra small</Button>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Notifications"><Bell /></Button>
              <Button size="icon-sm" variant="outline" aria-label="More"><MoreHorizontal /></Button>
              <Button variant="outline">
                <Sparkles data-icon="inline-start" /> Ask the agent
              </Button>
              <Button>
                <Spinner data-icon="inline-start" /> Tailoring…
              </Button>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-20">
          <SectionTitle id="badges" hint="fact and draft are project variants. Both carry a text label, never colour alone.">
            Badges
          </SectionTitle>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="fact"><Check /> Confirmed</Badge>
            <Badge variant="draft"><Sparkles /> Draft by agent</Badge>
            <Badge variant="fact"><Link2 /> LinkedIn export</Badge>
            <Badge variant="outline">Posted 2 min ago</Badge>
          </div>
        </section>

        {/* Forms */}
        <section className="mb-20">
          <SectionTitle id="forms" hint="One question per screen when it matters. Placeholders pass AA on their own.">
            Forms
          </SectionTitle>
          <div className="grid gap-10 md:grid-cols-2">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="target">Target role</FieldLabel>
                <Input id="target" placeholder="e.g. Senior Product Designer" />
                <FieldDescription>We&apos;ll show how the market reads this title.</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="search">Search jobs</FieldLabel>
                <InputGroup>
                  <InputGroupAddon><Search /></InputGroupAddon>
                  <InputGroupInput id="search" placeholder="Company, title, keyword" />
                  <InputGroupAddon align="inline-end">
                    <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" aria-invalid defaultValue="alex@" />
                <FieldError>Looks incomplete. Add the part after @.</FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="region">Region</FieldLabel>
                <Select defaultValue="eu">
                  <SelectTrigger id="region" className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">Europe (remote)</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="answer">Answer in your own words</FieldLabel>
                <Textarea id="answer" rows={3} placeholder="Two years at a B2B SaaS, mostly billing and onboarding…" />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field orientation="horizontal">
                <Switch id="notify" checked={notify} onCheckedChange={setNotify} />
                <FieldLabel htmlFor="notify">Notify me about new matches above 70</FieldLabel>
              </Field>
              <Field>
                <FieldLabel>Include in this resume</FieldLabel>
                <div className="space-y-2">
                  {["Billing flow redesign (Figma)", "Design system v2 (Miro)", "Onboarding experiments"].map((f, i) => (
                    <div key={f} className="flex items-center gap-2">
                      <Checkbox id={`f${i}`} defaultChecked={i < 2} />
                      <Label htmlFor={`f${i}`} className="font-normal">{f}</Label>
                    </div>
                  ))}
                </div>
              </Field>
              <Field>
                <FieldLabel>Apply mode</FieldLabel>
                <RadioGroup defaultValue="review">
                  {[
                    ["review", "Show me before sending"],
                    ["auto", "Send automatically above 80"],
                  ].map(([v, l]) => (
                    <div key={v} className="flex items-center gap-2">
                      <RadioGroupItem id={`m-${v}`} value={v} />
                      <Label htmlFor={`m-${v}`} className="font-normal">{l}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </Field>
              <Field>
                <div className="flex items-baseline justify-between">
                  <FieldLabel htmlFor="tone">Tone: closer to how I write</FieldLabel>
                  <span className="text-sm text-muted-foreground">{tone[0]}%</span>
                </div>
                <Slider id="tone" value={tone} onValueChange={setTone} max={100} step={1} />
              </Field>
            </FieldGroup>
          </div>
        </section>

        {/* Overlays */}
        <section className="mb-20">
          <SectionTitle id="overlays" hint="Dialog for a decision, sheet for detail, dropdown for a short list.">
            Overlays
          </SectionTitle>
          <div className="flex flex-wrap items-center gap-3">
            <Dialog>
              <DialogTrigger asChild><Button variant="outline">Dialog</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send this resume to Figma?</DialogTitle>
                  <DialogDescription>
                    Every line traces to a fact you confirmed. We&apos;ll keep a snapshot of this version.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="ghost">Not yet</Button>
                  <Button onClick={() => toast.success("Sent. We'll tell you when someone opens it.")}>Send</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild><Button variant="outline">Sheet</Button></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Why 86</SheetTitle>
                  <SheetDescription>What matched, what didn&apos;t, and the one question that moves it.</SheetDescription>
                </SheetHeader>
                <div className="space-y-3 px-4 text-sm">
                  <p><Badge variant="fact"><Check /> Matched</Badge> 6 years product design, Figma expert, B2C growth.</p>
                  <p><Badge variant="draft"><Sparkles /> Unclear</Badge> B2B SaaS experience.</p>
                </div>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Dropdown <ChevronDown data-icon="inline-end" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Resume for Figma</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Open snapshot</DropdownMenuItem>
                <DropdownMenuItem>Compare with master</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Withdraw</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild><Button variant="outline">Tooltip</Button></TooltipTrigger>
              <TooltipContent>Posted 2 minutes ago · 3 applicants</TooltipContent>
            </Tooltip>

            <Button variant="outline" onClick={() => toast("New match: Stripe · Product Designer · 81")}>
              Toast
            </Button>
          </div>
        </section>

        {/* Product patterns */}
        <section className="mb-20">
          <SectionTitle id="patterns" hint="The three surfaces from PRODUCT.md: job feed with score, agent question, resume line with provenance.">
            Product patterns
          </SectionTitle>
          <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
            <Card>
              <CardHeader>
                <CardTitle>New matches</CardTitle>
                <CardDescription>Sorted by time posted. Score is a hint, not a verdict.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {jobs.map((j) => (
                    <li key={j.company} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-12 shrink-0 text-2xl leading-none font-semibold">{j.score}</div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium">{j.company} · {j.role}</div>
                        <div className="text-sm text-muted-foreground">
                          {j.posted} · Answer one question, score goes up
                        </div>
                      </div>
                      <Button size="sm" className="shrink-0">Tailor</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-between text-sm text-muted-foreground">
                <span>3 new since 09:40</span>
                <Button variant="link" size="sm" className="px-0">All matches</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card className="bg-muted">
                <CardHeader>
                  <Badge variant="draft" className="w-fit"><Sparkles /> One question</Badge>
                  <CardTitle className="text-[1.0625rem] leading-snug font-medium">
                    Do you have B2B SaaS experience?
                  </CardTitle>
                  <CardDescription>
                    Figma and Notion both ask for it. Your Stripe years might count, but only you know.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex-wrap gap-2">
                  <Button size="sm">Yes, two years</Button>
                  <Button size="sm" variant="outline">No</Button>
                  <Button size="sm" variant="ghost">Skip</Button>
                </CardFooter>
              </Card>

              <div className="space-y-3">
                <div className="text-sm font-medium">Resume line with provenance</div>
                <p className="max-w-[60ch] leading-relaxed">
                  Led the billing-flow redesign for 40k teams; cut failed payments by 18%.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Badge variant="fact"><Check /> Confirmed</Badge>
                  <span className="text-muted-foreground">from your answer on 12 Mar</span>
                  <Button variant="link" size="sm" className="h-auto px-0">Open fact</Button>
                </div>
                <Alert>
                  <Sparkles />
                  <AlertTitle>Draft, not yet yours</AlertTitle>
                  <AlertDescription>
                    &ldquo;Owned the design-system roadmap&rdquo; is the agent&apos;s guess from your Miro history. Confirm or fix it.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Data & states */}
        <section>
          <SectionTitle id="data" hint="Tabs, tables, progress, loading and empty states.">
            Data &amp; states
          </SectionTitle>
          <Tabs defaultValue="sent" className="mb-8">
            <TabsList>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="opened">Opened</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
            </TabsList>
            <TabsContent value="sent" className="pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((j) => (
                    <TableRow key={j.company}>
                      <TableCell className="font-medium">{j.company}</TableCell>
                      <TableCell>{j.role}</TableCell>
                      <TableCell className="text-right">{j.score}</TableCell>
                      <TableCell><Badge variant="outline">Sent {j.posted}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="opened" className="pt-4 text-sm text-muted-foreground">Nothing opened yet.</TabsContent>
            <TabsContent value="interviews" className="pt-4 text-sm text-muted-foreground">No interviews yet.</TabsContent>
          </Tabs>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium">Master resume</span>
                <span className="text-muted-foreground">42 facts</span>
              </div>
              <Progress value={62} aria-label="Master resume completeness" />
              <p className="text-sm text-muted-foreground">Three more answers and the agent stops asking about your last role.</p>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-3/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground"><Spinner /> Reading the posting…</div>
            </div>
            <Empty className="border">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Bell /></EmptyMedia>
                <EmptyTitle>No matches yet</EmptyTitle>
                <EmptyDescription>We check new postings every few minutes. You&apos;ll hear first.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
          <Separator className="my-10" />
          <p className="text-sm text-muted-foreground">
            Kit tokens live in <code className="rounded bg-muted px-1 py-0.5">src/index.css</code>; visual rules in DESIGN.md.
          </p>
        </section>
      </main>
    </div>
  )
}
