import SquareFoot from '@mui/icons-material/SquareFoot'
import Feedback from '@mui/icons-material/Feedback'
import WorkHistory from '@mui/icons-material/WorkHistory'
import Tune from '@mui/icons-material/Tune'

import Grid from '@/components/layout/Grid'

import PricingCard from './PricingCard'
import DesignInfo from './DesignInfo'
import classes from './Pricing.module.css'

export default function Pricing() {
  return (
   <div className={classes.container}>
      <h1 className={classes.title}>Start Building Beautiful Dashboards</h1>
      <p className={classes.text}>Lorem, ipsum adipisicing elit. In repellat assumenda possimus accusantium sed soluta atque inventore! Hic voluptate doloribus inventore impedit beatae molestiae, enim eos, labore et eveniet suscipit.</p>

      <div className={classes.pricing}>
        <div className={classes['pricing-card']}>
          <PricingCard
            title="Monthly"
            subtitle="billed monthly"
            descriptions={[
              'Down from $39/month.',
              'Our monthly plan grants access to <b>all premium features</b>, the best plan for short-term subscribers.',
            ]}
            price="35"
            footerNote="Prices are marked in TWD"
          />
        </div>
        <div className={classes['pricing-card']}>
          <PricingCard
            title="Yearly"
            subtitle="billed yearly ($159)"
            tag="Most popular"
            descriptions={[
              'Our <b>most popular</b> plan previously sold for $299 and is now only <b>$13.25/month</b>.',
              'This plan <b>saves you over 60%</b> in comparison to the monthly plan.',
            ]}
            price="13.25"
            highlight
            footerNote="Prices are marked in TWD"
          />
        </div>
      </div>

      <div className={classes['design-info']}>
        <Grid container spacing={12}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DesignInfo
              icon={<SquareFoot fontSize='large' />}
              title="Consistency"
              descriptions={[
                'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to.',
                'Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.'
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DesignInfo
              icon={<Feedback fontSize='large' />}
              title="Feedback"
              descriptions={[
                'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects.',
                'Visual feedback: reflect current state by updating or rearranging elements of the page.'
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DesignInfo
              icon={<WorkHistory fontSize='large' />}
              title="Efficiency"
              descriptions={[
                'Simplify the process: keep operating process simple and intuitive.',
                'Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions.',
                'Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.'
              ]}
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DesignInfo
              icon={<Tune fontSize='large' />}
              title="Controllability"
              descriptions={[
                'Decision making: giving advice about operations is acceptable, but do not make decisions for the users.',
                'Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.'
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}